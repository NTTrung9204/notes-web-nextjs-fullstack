import NoteDetail from '@/components/NoteDetail';

export default function Page({ params }: { params: { id: string } }) {
  return <NoteDetail id={params.id} />;
}
