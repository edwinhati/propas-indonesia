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
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [villages, setVillages] = useState([]);

    useEffect(() => {
        fetchData(
            "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
            "provinces",
            setProvinces
        );
    }, []);

    useEffect(() => {
        if (data.province) {
            const province = provinces.find(
                (item) => item.name === data.province
            );
            fetchData(
                `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${province.id}.json`,
                "regencies",
                setCities
            );
        } else {
            setCities([]);
        }
    }, [data.province, provinces]);

    useEffect(() => {
        if (data.city) {
            const city = cities.find((item) => item.name === data.city);
            fetchData(
                `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${city.id}.json`,
                "districts",
                setDistricts
            );
        } else {
            setDistricts([]);
        }
    }, [data.city, cities]);

    useEffect(() => {
        if (data.district) {
            const district = districts.find(
                (item) => item.name === data.district
            );
            fetchData(
                `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${district.id}.json`,
                "villages",
                setVillages
            );
        }
    }, [data.district, districts]);


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
                        ...provinces.map((province) => ({
                            label: province.name,
                            value: province.name,
                        })),
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
                        ...cities.map((city) => ({
                            label: city.name,
                            value: city.name,
                        })),
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
                        ...districts.map((district) => ({
                            label: district.name,
                            value: district.name,
                        })),
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
                        ...villages.map((village) => ({
                            label: village.name,
                            value: village.name,
                        })),
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
