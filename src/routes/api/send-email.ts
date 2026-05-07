import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, date, time, address, serviceLabel } = await request.json();

    if (!name || !phone || !date || !address || !serviceLabel) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Booking <onboarding@resend.dev>',
      to: ['splendorcleaningtechnician28@gmail.com'],
      subject: `New Booking Request - ${serviceLabel}`,
      html: `<p>You have a new booking request:</p>
             <ul>
               <li><strong>Name:</strong> ${name}</li>
               <li><strong>Phone:</strong> ${phone}</li>
               <li><strong>Date:</strong> ${date}</li>
               <li><strong>Time:</strong> ${time || 'Flexible'}</li>
               <li><strong>Address:</strong> ${address}</li>
               <li><strong>Service:</strong> ${serviceLabel}</li>
             </ul>`,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
}