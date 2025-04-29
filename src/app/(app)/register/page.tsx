import RegistrationForm from "@/components/RegistrationForm";
import Navbar from "@/components/home/Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { validateSessionToken } from "@/lib/sessions";

export default async function SignUpPage() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session");
    if (sessionToken) {
        const sessionValidationResult = await validateSessionToken(sessionToken.value);
        if (sessionValidationResult.session && sessionValidationResult.user) {
            redirect("/dashboard");
        }
    }

    return (
        <div>
            <Navbar />
            <div className="bg-orange-100 flex items-center justify-center py-32 flex-grow">
                <RegistrationForm/>
            </div>
        </div>
    );
}