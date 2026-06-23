import { createFileRoute } from "@tanstack/react-router"
import Marketplace from "../../Components/Marketplace"

export const Route = createFileRoute("/marketplace/")({
    component: Marketplace,
})