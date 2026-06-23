import { createFileRoute } from "@tanstack/react-router"
import Hero from "../Components/hero.jsx"
import Marketplace from "../Components/Marketplace.jsx"

export const Route = createFileRoute("/")({
    component: Hero,
})