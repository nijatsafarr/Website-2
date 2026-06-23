import { createFileRoute } from '@tanstack/react-router'
// import Marketplace from '../Components/Marketplace'
import Icmal from '../../Components/icmal'

export const Route = createFileRoute('/marketplace/$id')({
  component: Icmal,
})

// function Salam() {
//   const { id } = Route.useParams()

//   return (
//     <div className="p-10">
//       <h1 className="text-4xl font-bold">
//         Product ID: {id}
//       </h1>
//     </div>
//   )
// }
