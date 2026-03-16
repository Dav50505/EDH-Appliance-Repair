"use client";

import { BookingForm } from "@/components/booking-form";

type BookingFormProps = {
  title?: string;
  description?: string;
  id?: string;
  sourcePath?: string;
  trackLabel?: string;
};

export function BookingFormShell(props: BookingFormProps) {
  return <BookingForm {...props} />;
}
