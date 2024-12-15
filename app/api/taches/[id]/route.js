import connectToMongoDB from "@/libs/mongodb";
import Tache from "@/models/tache";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { titre, description } = await request.json();
  await connectToMongoDB();
  await Tache.findByIdAndUpdate(id, { titre, description });
  return NextResponse.json({ message: "Tâche est modifié !" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const tache = await Tache.findOne({ _id: id });
  return NextResponse.json({ tache }, { status: 200 });
}