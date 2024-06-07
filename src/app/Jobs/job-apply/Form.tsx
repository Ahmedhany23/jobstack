export default function Form() {
  return (
    <section className="relative bg-slate-50 lg:py-24 py-16">
        <div className="container mx-auto">
            <div className="md:flex justify-center">
                <div className="lg:w-2/4 md:w-2/3">
                    <div className="p-6 bg-white shadow rounded-md">
                        <form className="text-left">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="font-semibold">
                                        Categories
                                    </label>
                                    <select className=" form-input border border-slate-100  w-full mt-1 flex items-center justify-between cursor-pointer text-slate-600">
                                    <option value="WD">Web Designer</option>
                                    <option value="WD">Web Developer</option>
                                    <option value="UI">UI / UX Desinger</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className=" font-semibold">
                                        Your Name:
                                    </label>
                                    <input type="text" className="form-input border border-slate-100 mt-1" placeholder="Ahmed" />
                                </div>
                                <div className="mb-4">
                                    <label className=" font-semibold">
                                        Email Address:
                                    </label>
                                    <input type="email" className="form-input border border-slate-100 mt-1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-4">
                                    <label className=" font-semibold">
                                        Phone No.:
                                    </label>
                                    <input type="number" className="form-input border border-slate-100 mt-1" placeholder="+458 854-8965" />
                                </div>
                                <div className="mb-4">
                                    <label className="font-semibold">
                                        Location
                                    </label>
                                    <select className=" form-input border border-slate-100  w-full mt-1 flex items-center justify-between cursor-pointer text-slate-600">
                                    <option value="WD">New York</option>
                                    <option value="WD">North Carolina</option>
                                    <option value="UI">South Carolina</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label  className=" font-semibold">
                                        Coverting Letter:
                                    </label>
                                    <textarea  className="form-input border border-slate-100 mt-1 h-[7rem!important]" placeholder="Message :" />
                                </div>
                                <div className="mb-4 flex flex-col">
                                    <label className=" font-semibold">
                                        Upload Resume:
                                    </label>
                                    <input type="file" className=" border border-slate-100 mt-1 file:h-10 file:-mx-3 file:-my-2 file:cursor-pointer file:rounded-none file:border-0 file:px-3 file:text-neutral-700 bg-clip-padding px-3 py-1.5  file:me-3  "  multiple/>
                                </div>
                                <div>
                                    <button className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:boder-emerald-700 text-white">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
