import Navbar from '@/components/home/Navbar'

export default function PrivacyPolicyPage() {
    return (
        <div>
            <Navbar />
            <div className="py-32 px-20 h-[100vh] overflow-auto">
                <h1 className="text-xl font-extrabold">Privacy Policy</h1>
                <br />

                <h2 className="text-lg font-bold">Introduction</h2>
                <p>Recess Hacks places a strong emphasis on protecting the privacy and personal data of our participants, including hackers, sponsors, volunteers, and other contributors. To run our events effectively, we may collect certain information, both passively through website analytics and actively through application forms submitted by our participants. We are committed to clearly explaining the reasons for collecting this information and handling all data with the utmost respect for your privacy.</p>
                <br />

                <h2 className="text-lg font-bold">Analytics Data</h2>
                <p>We collect anonymous analytics data from platforms such as our website at <a href="https://recesshacks.ca/" target="_blank" className="underline">https://recesshacks.ca/</a> and our Instagram (<a href="https://www.instagram.com/recesshacks/" target="_blank" className="underline">@recesshacks</a>). This data may include general metrics about website usage. We may share this data publicly or privately with third parties, but only in broad categories (e.g., monthly visitor counts) to maintain transparency.</p>
                <br />

                <h2 className="text-lg font-bold">Application and Event Data</h2>
                <p>To participate in Recess Hacks, we collect only the minimum information needed to manage the event efficiently. Collected information is used exclusively within the services utilized by Recess Hacks for event operations, including platforms such as Tally, Google Sheets, and Netlify.</p>
                <br />

                <h2 className="text-lg font-bold">Photography and Media Release</h2>
                <p>By attending Recess Hacks, you acknowledge and consent that organizers and affiliated partners may take photographs, videos, or other media during the event, which may include your image, voice, or participation. These materials may be used for promotional, educational, or informational purposes online and offline. If you have concerns regarding media usage, please contact us at <a href="mailto:recesshacks@gmail.com" className="underline">recesshacks@gmail.com</a>. We will do our best to accommodate requests, although complete removal of already published materials cannot be guaranteed.</p>
                <br />

                <h2 className="text-lg font-bold">Emails and Other Messages</h2>
                <p>Any communications through emails or Instagram direct messages (DMs) will be kept confidential and will only be accessible to the Recess Hacks organizing team unless explicit permission is given to share it.</p>
                <br />

                <h2 className="text-lg font-bold">How We Keep Your Data Safe</h2>
                <p>Recess Hacks uses industry-standard security practices and encryption to protect your data. Our infrastructure is primarily hosted in Google's data centers, which follow strict protocols to prevent unauthorized access. Internally, data access is strictly monitored, and only essential organizers have access to application data. Volunteers and event staff have limited access only for essential operational activities such as check-in and registration during the event.</p>
                <br />

                <h2 className="text-lg font-bold">Deletion Policy</h2>
                <p>If you request deletion of your personal data by emailing us at <a href="mailto:recesshacks@gmail.com" target="_blank" className="underline">recesshacks@gmail.com</a> with proof of identity, we will delete your data within 30 days. Please note that some data may remain in rolling backups for a limited time, but it will not be used and will be deleted from any restored backup if necessary.</p>
                <br />

                <h2 className="text-lg font-bold">Questions</h2>
                <p>If you have any questions or concerns about this privacy policy, feel free to contact us at <a href="mailto:recesshacks@gmail.com" target="_blank" className="underline">recesshacks@gmail.com</a>. We deeply value your privacy and are always open to feedback to improve our practices.</p>
                <br />

                <p>Credit for this privacy policy is attributed to McHacks.</p>
            </div>
        </div>
    )
}