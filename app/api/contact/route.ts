import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";

const SUBMISSIONS_FILE = join(process.cwd(), "contact-submissions.json");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organisation, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const submission = {
      name,
      email,
      organisation: organisation || "",
      message,
      timestamp: new Date().toISOString(),
    };

    // Read existing submissions
    let submissions: unknown[] = [];
    try {
      const data = await readFile(SUBMISSIONS_FILE, "utf-8");
      submissions = JSON.parse(data);
    } catch {
      // File doesn't exist yet — start fresh
    }

    submissions.push(submission);
    await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

    // TODO: Add email sending here later
    // e.g. await sendEmail({ to: "m.baida@nmu.ua", subject: `New enquiry from ${name}`, ... })

    console.log("New contact submission:", submission);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
