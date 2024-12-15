import connectToMongoDB from "@/libs/mongodb";
import Tache from "@/models/tache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { titre, description } = await request.json();
  await connectToMongoDB();
  await Tache.create({ titre, description });
  return NextResponse.json({ message: "Tâche est creer !" }, { status: 201 });
}

export async function GET() {
  await connectToMongoDB();
  const taches = await Tache.find();
  return NextResponse.json({ taches });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToMongoDB();
  await Tache.findByIdAndDelete(id);
  await Tache.findByIdAndDelete(id);
  return NextResponse.json({ message: "Tâche est supprimé !" }, { status: 200 });
}