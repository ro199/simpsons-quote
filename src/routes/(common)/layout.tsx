import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageWrapper from "~/components/page-wrapper";

export default component$(() => {
    return (
        <PageWrapper>
            <Header />
            <Slot />
            <Footer />
        </PageWrapper>

    )
});
