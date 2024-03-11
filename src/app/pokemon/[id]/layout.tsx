import { Metadata } from "next";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}


type Props = {
  params: { id: string }
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const id = params.id
 
  return {
    title: "Pokémon n°" + id,
    description: "Détails du Pokémon n°" + id,
  }
}
