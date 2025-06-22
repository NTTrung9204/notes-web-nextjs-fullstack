import CreateNoteBtn from '@/components/ui/CreateNoteBtn';
import NoteItem from '@/components/ui/NoteItem';

export default function NotesPage() {
    return (
        <div className="flex justify-around flex-wrap gap-8 mt-4">
            <NoteItem
                title="Ghi chú 1"
                content="Đây là nội dung ghi chú đầu tiên về công việc trong tuần."
            />
            <NoteItem
                title="Ghi chú 2"
                content="Học xong phần React và bắt đầu chuyển sang Next.js. Học xong phần React và bắt đầu chuyển sang Next.js. Học xong phần React và bắt đầu chuyển sang Next.js."
            />
            <NoteItem
                title="Ghi chú 3"
                content="Gặp mentor vào chiều thứ 5 để báo cáo tiến độ dự án."
            />
            <NoteItem
                title="Ghi chú 4"
                content="Mua sách mới: Clean Architecture của Uncle Bob."
            />
            <NoteItem
                title="Ghi chú 4"
                content="Mua sách mới: Clean Architecture của Uncle Bob."
            />
            <NoteItem
                title="Ghi chú 4"
                content="Mua sách mới: Clean Architecture của Uncle Bob."
            />
            <NoteItem
                title="Ghi chú 4"
                content="Mua sách mới: Clean Architecture của Uncle Bob."
            />
            <CreateNoteBtn />
        </div>
    );
}
