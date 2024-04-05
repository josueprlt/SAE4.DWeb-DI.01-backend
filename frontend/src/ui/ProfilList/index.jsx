import { useState, useEffect } from "react";
import { fetchUser } from "../../lib/loaders";
import { Link } from "react-router-dom";

export default function ProfilList() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser()
            .then((data) => {
                setUser(data);
            })
            .catch((error) =>
                console.error("Erreur lors de la récupération du cookie:", error)
            );
    });


    if (!user) {
        return (
            <>
                <div className="text-white w-screen h-screen pt-20 text-center">Loading...</div>
            </>
        );
    } else {

        return (
            <>
                <section className="p-10 pt-36 md:p-36 text-colorWhite">
                    <h2 className="text-3xl font-bold mb-20">Paramètres du compte</h2>
                    <section className="mb-10">
                        <h3 className="text-xl font-bold mb-10">Mes données</h3>
                        <p className="text-lg font-medium">Email: {user.email}</p>
                        <div className="flex justify-between flex-wrap gap-10">
                            <p className="text-lg font-medium">Mot de passe: *************</p>
                            <a href="#" className="underline font-bold">Changer le mot de passe</a>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-5">Profil</h3>

                        <div className="flex justify-between items-center flex-wrap gap-10 mb-10">
                            <div className="flex items-center gap-5">
                                <img src={user.imgProfile} alt={"image de profile de " + user.name} className="w-14"/>
                                <p className="text-lg font-medium">{user.name}</p>
                            </div>

                            <a href="#" className="underline font-bold">Editer le profil</a>
                        </div>

                    </section>

                    <section className="flex justify-between flex-wrap gap-10">
                        <h3 className="text-xl font-bold mb-5">Compte</h3>
                        <a href="#" className="underline font-bold">Supprimer le compte</a>
                    </section>

                    <Link className="p-2 bg-colorWhite">Supprimer le compte</Link>
                </section>
            </>
        );
    }
}