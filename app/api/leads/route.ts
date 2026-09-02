import { NextResponse } from "next/server";
import { submitLead, fetchLeads } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone_or_wa) {
      return NextResponse.json(
        { error: "Nama dan Nomor WhatsApp wajib diisi." },
        { status: 400 }
      );
    }

    const result = await submitLead({
      name: body.name,
      phone_or_wa: body.phone_or_wa,
      email: body.email || null,
      project_type: body.project_type || "General Inquiry",
      package_selected: body.package_selected || null,
      estimated_budget: body.estimated_budget || null,
      selected_features: body.selected_features || [],
      notes: body.notes || null,
      status: "new",
    });

    return NextResponse.json({ success: true, result });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await fetchLeads();
    return NextResponse.json({ success: true, leads });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
