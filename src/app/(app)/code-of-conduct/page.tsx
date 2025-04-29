import Navbar from '@/components/home/Navbar'

export default function CodeOfConductPage() {
    return (
        <div>
            <Navbar />
            <div className="py-20 px-20 h-[100vh] overflow-auto">
                <h1 className="text-lg font-bold">Code of Conduct</h1>
                <p>Recess Hacks is committed to creating a welcoming, inclusive, respectful, and safe environment for all participants and volunteers. All attendees — including students, sponsors, speakers, judges, volunteers, and organizers — are expected to uphold this Code of Conduct throughout the event.</p>
                <br />

                <p>Harassment of any kind will not be tolerated. This includes, but is not limited to, offensive comments or messages related to gender, age, sexual orientation, disability, appearance, race, or religion; displaying sexual or graphic content in public spaces; deliberate intimidation, stalking, or following; unwanted photography or recording; disruption of talks or events; inappropriate physical contact; and unwelcome sexual attention.</p>
                <br />

                <p>Anyone asked to stop any harassing behavior is expected to comply immediately. Sponsors, speakers, volunteers, and organizers are equally bound by this policy. In particular, sponsors should avoid using sexualized imagery, activities, or materials. Booth staff, including volunteers, must not wear sexualized clothing, uniforms, or costumes, or otherwise create a sexualized environment.</p>
                <br />

                <p>Additionally, any hack or project that violates this Code of Conduct may be disqualified or barred from being showcased, at the discretion of the organizers.</p>
                <br />

                <p>Photography and videography are encouraged, but participants must be given a fair opportunity to opt out. If someone requests not to be photographed, that request must be honored. Taking photos or screenshots of others' private workspaces without permission is prohibited.</p>
                <br />

                <p>If harmful behavior occurs, event organizers may take immediate action, including issuing warnings or removing individuals from the event without a refund if applicable.</p>
                <br />
                
                <p>If you experience or witness harassment, or if you have any concerns, please report the incident as soon as possible. Recess Hacks staff will be clearly identifiable and available throughout the event. You can also contact the Co-Directors directly using the information provided below. We expect all attendees to respect this Code of Conduct across all hackathon venues, workshops, and associated social events.</p>
                <br />

                <h1 className="text-lg font-bold">Reporting Procedures</h1>
                <p>If you experience or observe behavior that violates this Code of Conduct, please report it using the following options. You may choose to remain anonymous.</p>
                <br />

                <p>Approach any organizer or on-duty security at the venue. Alternatively, you can email the Co-Directors directly at <a href="mailto:recesshacks@gmail.com" target="_blank" className="underline">recesshacks@gmail.com</a>.</p>
                <br />

                <p>In emergencies, please contact local authorities immediately:</p>
                <br />

                <p>
                    Oakville Police/Fire/Paramedics <br />
                    Emergency: 911 <br />
                    Non-Emergency: 905-825-4777 <br />
                </p>
                <br />

                <p>We acknowledge that this Code of Conduct draws inspiration from the following documents:</p>
                <ul className="list-disc pl-8">
                    <li>McHacks Code of Conduct</li>
                    <li>Major League Hacking Code of Conduct</li>
                    <li>Hack Code of Conduct</li>
                    <li>Hack@Brown Code of Conduct</li>
                    <li>JustHack Code of Conduct</li>
                </ul>
                <br />

                <p>For any questions or concerns regarding this Code of Conduct, please contact us at <a href="mailto:hello@recesshacks.com" target="_blank" className="underline">hello@recesshacks.com</a>. Recess Hacks reserves the right to update or amend this Code of Conduct at any time.</p>
            </div>
        </div>
    )
}