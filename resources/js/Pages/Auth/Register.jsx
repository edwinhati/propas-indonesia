import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import PersonalInformation from "@/Components/RegisterForm/PersonalInformation";
import AccountInformation from "@/Components/RegisterForm/AccountInformation";
import AddressInformation from "@/Components/RegisterForm/AddressInformation";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: "",
        name: "",
        place_of_birth: "",
        date_of_birth: "",
        gender: "",
        marital_status: "",
        province: "",
        city: "",
        district: "",
        village: "",
        address: "",
        phone_number: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <PersonalInformation
                    data={data}
                    setData={setData}
                    errors={errors}
                />

                <AddressInformation
                    data={data}
                    setData={setData}
                    errors={errors}
                />

                <AccountInformation
                    data={data}
                    setData={setData}
                    errors={errors}
                />
                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
