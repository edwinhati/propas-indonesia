import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import NumberInput from "@/Components/NumberInput";

export default function PersonalInformation({ data, setData, errors }) {
    return (
        <div>
            <div>
                <InputLabel htmlFor="nik" value="NIK" />
                <NumberInput
                    id="nik"
                    name="nik"
                    value={data.nik}
                    className="mt-1 block w-full"
                    autoComplete="nik"
                    isFocused={true}
                    onChange={(e) => setData("nik", e.target.value)}
                    required
                />

                <InputError message={errors.nik} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="name" value="Nama Lengkap" />

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    onChange={(e) => setData("name", e.target.value)}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="place_of_birth" value="Tempat Lahir" />

                <TextInput
                    id="place_of_birth"
                    name="place_of_birth"
                    value={data.place_of_birth}
                    className="mt-1 block w-full"
                    autoComplete="place_of_birth"
                    onChange={(e) => setData("place_of_birth", e.target.value)}
                    required
                />

                <InputError message={errors.place_of_birth} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="date_of_birth" value="Tanggal Lahir" />
                <input
                    type="date"
                    id="date_of_birth"
                    name="date_of_birth"
                    value={data.date_of_birth}
                    className="mt-1 block w-full border border-gray-300 text-gray-900 text-sm rounded-lg"
                    autoComplete="date_of_birth"
                    onChange={(e) => setData("date_of_birth", e.target.value)}
                    required
                />

                <InputError message={errors.date_of_birth} className="mt-2" />
            </div>
            <div className="mt-4 flex gap-2">
                <div className="w-1/2">
                    <InputLabel htmlFor="gender" value="Jenis Kelamin" />

                    <select className="border w-full border-gray-300 text-gray-900 text-sm rounded-lg">
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>

                    <InputError message={errors.gender} className="mt-2" />
                </div>
                <div className="w-1/2">
                    <InputLabel
                        htmlFor="marital_status"
                        value="Status Perkawinan"
                    />

                    <select className="border w-full border-gray-300 text-gray-900 text-sm rounded-lg">
                        <option value="Belum Menikah">Belum Menikah</option>
                        <option value="Menikah">Menikah</option>
                        <option value="Menikah">Pernah Menikah</option>
                    </select>

                    <InputError
                        message={errors.marital_status}
                        className="mt-2"
                    />
                </div>
            </div>
        </div>
    );
}
