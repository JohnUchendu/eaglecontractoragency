import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const reviews = [
  {
    author: "Kelechi Kenneth Ubani - Principal Partner (K.K.Ubani & Co.)",
    rating: 5,
    text: "Excellent service! Highly recommend this eagle contractor agency to give you a professional secure website."
  },
  // {
  //   author: "Jane Smith",
  //   rating: 4,
  //   text: "Great customer support and very effective treatment."
  // },
  // {
  //   author: "Mike Johnson",
  //   rating: 5,
  //   text: "Professional team and fast results. Couldn't be happier!"
  // }
];

export default function Reviews() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <Carousel>
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{review.author}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rating: {review.rating}⭐</p>
                <p className="mt-2">"{review.text}"</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
