import BlogShow from "@/components/public/BlogShow";
import CommunityForm from "@/components/public/CommunityForm";
import Discover from "@/components/public/Discover";
import Hero from "@/components/public/Hero";
import Partner from "@/components/public/Partner";
import Storefront from "@/components/public/Storefront";
import SumogoInfo from "@/components/public/SumogoInfo";
import Testimonies from "@/components/public/Testimonies";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Discover />
      <Storefront />
      <SumogoInfo />
      <Partner />
      <Testimonies/>
      <BlogShow />
      <CommunityForm />
    </>
  );
}
