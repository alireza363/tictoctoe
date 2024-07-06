import { useState } from "react"

export default function BayerForm() {
    const [form, setForm] = useState({})

    return <div className="py-6 px-8">
        <div className="flex">
            <span className="flex-1 p-1">آدرس گیرنده</span>
            <button className="p-1 px-3">بازگشت</button>
        </div>

        <FormInput type="text" id="01" value={form.code} 
        onInput={(event) => {setForm({...form, code: event.target.value})}} title="کد ملی" text="کد ملی الزامی است!" />
        <FormInput type="text" id="02" value={form.name} 
        onInput={(event) => {setForm({...form, name: event.target.value})}} title="نام و نام خانوادگی" />
        <FormInput type="text" id="03" value={form.mobile} 
        onInput={(event) => {setForm({...form, mobile: event.target.value})}} title="شماره موبایل" />
    </div>
}

function FormInput(props) {
    const {id, title, text, ...others} = props
    return <div className="mt-5">
        <div className="relative border-[1px] border-stone-500 rounded-sm p-3">
            <label htmlFor={id} className="absolute top-[-15px] bg-white px-2">{title}</label>
            <input id={id} {...others} className="w-full h-8 border-none outline-none"/>
        </div>
        <p className="text-sm text-stone-400 p-1">{text}</p>
    </div>
}