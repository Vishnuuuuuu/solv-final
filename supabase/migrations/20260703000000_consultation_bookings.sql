/*
  # Create consultation_bookings table for free Monday in-person consultation

  1. New Tables
    - `consultation_bookings`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `mobile` (text, not null)
      - `email` (text, not null)
      - `requirements` (text, nullable)
      - `slot_date` (date, not null) - the Monday the slot falls on
      - `slot_time` (text, not null) - one of the fixed 30-min slots between 6-9 PM
      - `status` (text, default 'confirmed')
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS
    - Public can insert a booking (book a slot)
    - Public can read bookings for a given date (to know which slots are taken),
      but only slot_date/slot_time are exposed via a view - not personal details
    - Authenticated (admin) users can read/manage all booking details

  3. Constraints
    - Unique (slot_date, slot_time) so a slot can only be booked once
*/

CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  mobile text NOT NULL,
  email text NOT NULL,
  requirements text,
  slot_date date NOT NULL,
  slot_time text NOT NULL,
  status text NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  UNIQUE (slot_date, slot_time)
);

ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Anyone can book a slot
CREATE POLICY "Anyone can create a booking"
  ON consultation_bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Public can only see which slots are taken (date + time + status), not who booked them.
-- We expose that through a view instead of a broad SELECT policy on the base table.
-- security_invoker ensures the view runs under the querying user's own RLS/permissions
-- rather than the view owner's (avoids the Postgres SECURITY DEFINER footgun).
CREATE OR REPLACE VIEW consultation_booked_slots
  WITH (security_invoker = true) AS
  SELECT slot_date, slot_time
  FROM consultation_bookings
  WHERE status = 'confirmed';

GRANT SELECT ON consultation_booked_slots TO public;

-- Authenticated admins can read and manage full booking details
CREATE POLICY "Admins can read all bookings"
  ON consultation_bookings
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users au
      WHERE au.auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can update bookings"
  ON consultation_bookings
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users au
      WHERE au.auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can delete bookings"
  ON consultation_bookings
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users au
      WHERE au.auth_user_id = auth.uid() AND au.role = 'super_admin'
    )
  );

CREATE INDEX IF NOT EXISTS idx_consultation_bookings_slot_date
  ON consultation_bookings (slot_date);
