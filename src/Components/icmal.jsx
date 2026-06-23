import { StarIcon } from '@heroicons/react/20/solid'
import { useParams } from '@tanstack/react-router'
import { products } from './Marketplace'
import { useState } from 'react'

const reviews = {
  href: '#',
  average: 4,
  totalCount: 117,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Icmal() {
  const { id } = useParams({ strict: false })

  const [product, setProduct] = useState(
      products.find((item) => item.id == id)
    )

  if (!product) {
    return (
      <div className="p-10 text-center text-2xl font-bold">
        Product not found
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-10">

        {/* IMAGE SECTION */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-[500px] w-full object-contain"
            />
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="mx-auto mt-10 max-w-6xl grid grid-cols-1 gap-10 px-4 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-4 text-3xl font-semibold text-indigo-600">
              {product.price}
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Rəng
              </h3>

              <p className="mt-2 text-gray-600">
                {product.color}
              </p>
            </div>

            {/* REVIEWS */}
            <div className="mt-6 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? 'text-yellow-400'
                        : 'text-gray-300',
                      'h-5 w-5'
                    )}
                  />
                ))}
              </div>

              <p className="ml-3 text-sm text-gray-600">
                {reviews.totalCount} reviews
              </p>
            </div>

            {/* BUTTON */}
            <button className="mt-8 w-full rounded-xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white hover:bg-indigo-700 transition">
              Sifariş Et!
            </button>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Təsvir
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {product.description}
            </p>

            {/* FEATURES */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900">
                Özəllikləri
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>{product.features}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}