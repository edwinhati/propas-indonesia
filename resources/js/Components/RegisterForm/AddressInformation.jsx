import { useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";

const fetchData = async (url, errorMessage, setter) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch ${errorMessage}`);
        }

        const data = await response.json();
        setter(data);
    } catch (error) {
        console.error(`Error fetching ${errorMessage}:`);
    }
};

export default function AddressInformation({ data, setData, errors }) {
    return (
        <div>
            <div className="mt-4">
                <InputLabel htmlFor="province" value="Provinsi" />
                <SelectInput
                    id="province"
                    name="province"
                    value={data.province}
                    className="mt-1 block w-full"
                    autoComplete="province"
                    onChange={(e) => setData("province", e.target.value)}
                    options={[
                        { label: "---", value: "" },
                        { label: "Jawa Barat", value: "Jawa Barat" },
                        { label: "Jawa Tengah", value: "Jawa Tengah" },
                        { label: "Jawa Timur", value: "Jawa Timur" },
                    ]}
                    required
                />
                <InputError message={errors.province} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="city" value="Kota/Kabupaten" />
                <SelectInput
                    id="city"
                    name="city"
                    value={data.city}
                    className="mt-1 block w-full"
                    autoComplete="city"
                    onChange={(e) => setData("city", e.target.value)}
                    options={[
                        { label: "---", value: "" },
                        { label: "Bandung", value: "Bandung" },
                        { label: "Bekasi", value: "Bekasi" },
                        { label: "Bogor", value: "Bogor" },
                    ]}
                    required
                />
                <InputError message={errors.city} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="district" value="Kecamatan" />
                <SelectInput
                    id="district"
                    name="district"
                    value={data.district}
                    className="mt-1 block w-full"
                    autoComplete="district"
                    onChange={(e) => setData("district", e.target.value)}
                    options={[
                        { label: "---", value: "" },
                        { label: "Cimahi", value: "Cimahi" },
                        { label: "Cimanggis", value: "Cimanggis" },
                        { label: "Cinere", value: "Cinere" },
                    ]}
                    required
                />
                <InputError message={errors.district} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="village" value="Desa/Kelurahan" />
                <SelectInput
                    id="village"
                    name="village"
                    value={data.village}
                    className="mt-1 block w-full"
                    autoComplete="village"
                    onChange={(e) => setData("village", e.target.value)}
                    options={[
                        { label: "---", value: "" },
                        { label: "Cibabat", value: "Cibabat" },
                        { label: "Cibadak", value: "Cibadak" },
                        { label: "Cibitung", value: "Cibitung" },
                    ]}
                    required
                />
                <InputError message={errors.village} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="address" value="Alamat" />
                <TextInput
                    id="address"
                    name="address"
                    value={data.address}
                    className="mt-1 block w-full"
                    autoComplete="address"
                    onChange={(e) => setData("address", e.target.value)}
                    required
                />
                <InputError message={errors.address} className="mt-2" />
            </div>
        </div>
    );
}
