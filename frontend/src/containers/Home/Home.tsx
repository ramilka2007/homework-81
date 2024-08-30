import React, {useState} from 'react';
import {Link} from "../../types.ts";

const Home = () => {
    const [form, setForm] = useState<Link>({
        originalUrl: '',
    });

    const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
    };
    return (
        <div className="container">
            <div className="py-5">
                <h2>Short your url</h2>
                <form onSubmit={submitForm} className="mb-5">
                    <div className="mb-3 w-75 mx-auto">
                        <input
                            type="text"
                            name="originalUrl"
                            placeholder="Enter url"
                            id="originalUrl"
                            className="form-control"
                            value={form.originalUrl}
                            onChange={e => changeForm(e)}
                        />
                    </div>
                    <button disabled={form.originalUrl === ''} type="submit"
                            className="btn btn-primary">Shorten!
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Home;