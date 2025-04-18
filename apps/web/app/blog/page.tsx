import { redirect } from "next/navigation";

/**
 * Blog functionality has been removed to make the application lighter
 * This page now simply redirects to the homepage
 */
export default function BlogContentsPage() {
  // Redirect to home page
  redirect('/');
}
