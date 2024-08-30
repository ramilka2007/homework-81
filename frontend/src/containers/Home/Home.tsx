import React, {useState} from 'react';
import {LinkForm} from "../../types.ts";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectLink} from "./homeSlice.ts";
import {makeFromOriginalToShort} from "./homeThunk.ts";

const Home = () => {
    const dispatch = useAppDispatch();
    const link = useAppSelector(selectLink);

    const [form, setForm] = useState<LinkForm>({
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
        await dispatch(makeFromOriginalToShort(form));
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

                {link === null ? null :
                    <>
                        <a href={link.originalUrl} target="_blank">http://localhost:8000/{link.shortUrl}</a>
                    </>
                }
            </div>
        </div>
    );
};

export default Home;