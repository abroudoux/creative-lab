import React from "react";

import Card from "../components/Card";


export default function Products() {

    return (

        <section id="products" className="px-20 py-44">

            <h2 className="text-5xl pb-6 font-semibold">Nos Produits</h2>

            <p className="text-lg pb-16">
                Exporez la diversité des jeux proposés par Dawn au travers de 3 coffrets concus pour vos soirées
            </p>

            <div className="w-full flex-row-center-between">
                    <Card title="Jack"/>
                    <Card title="Queen"/>
                    <Card title="King"/>
                </div>

        </section>

    )

}