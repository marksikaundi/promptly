import { ConnectedAccounts } from "@/features/dash/connected-accounts";
import { FeedbackButton } from "@/features/dash/feedback-button";
import { Sidebar } from "@/features/dash/sidebar";
import { UploadSection } from "@/features/dash/upload-section";


export default function Page() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <UploadSection />
          <ConnectedAccounts />
        </div>
        <FeedbackButton />
      </main>
    </div>
  )
}

