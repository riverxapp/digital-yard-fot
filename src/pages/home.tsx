import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function Home() {
  return (
    <main className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f0ebe3] py-24 px-6 sm:px-12 text-[#26170e]">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Taste the Authentic Flavors of Our Restaurant
            </h1>
            <p className="text-lg sm:text-xl max-w-xl mb-8 leading-relaxed text-[#6f5b4a]">
              Experience a culinary journey with our chef’s精选ingredients and signature dishes crafted to delight every palate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#d94828] text-white hover:bg-[#b5341f]">
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#d94828] text-[#d94828] hover:bg-[#fee9db]">
                <Link to="/reservation">Make Reservation</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Subtle layered translucent overlay for texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#f9f4ec]/40 via-transparent to-[#f9f4ec]/0"
          style={{ mixBlendMode: "multiply" }}
        />
      </section>

      {/* Value Proposition */}
      <section className="container mx-auto max-w-6xl px-6 sm:px-12 space-y-12">
        <div className="grid gap-12 md:grid-cols-3">
          <Card className="border-[#f1ddc9] bg-[#fffaf2] shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-[#26170e]">Farm Fresh Ingredients</CardTitle>
              <CardDescription className="text-[#6f5b4a]">
                Sourced locally to ensure quality and flavor in every dish.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              We partner with trusted farmers in the region to bring you the freshest seasonal products.
            </CardContent>
          </Card>

          <Card className="border-[#f1ddc9] bg-[#fffaf2] shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-[#26170e]">Inviting Atmosphere</CardTitle>
              <CardDescription className="text-[#6f5b4a]">
                Relax and unwind in a cozy, warm setting designed for memorable moments.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              Our beautifully crafted interiors blend rustic charm with modern comfort.
            </CardContent>
          </Card>

          <Card className="border-[#f1ddc9] bg-[#fffaf2] shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-[#26170e]">Exceptional Service</CardTitle>
              <CardDescription className="text-[#6f5b4a]">
                Friendly, attentive staff committed to your best dining experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              We go the extra mile to make every visit special and personalized.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="bg-[#fff7ec] py-20 px-6 sm:px-12">
        <div className="container mx-auto max-w-6xl space-y-10">
          <h2 className="text-4xl font-semibold text-[#26170e]">Featured Menu Items</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-[#f1ddc9] bg-[#fffaf2] shadow-sm">
              <img
                src="/images/dish-1.jpg"
                alt="Grilled Seasonal Vegetables"
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-xl text-[#26170e]">Grilled Seasonal Vegetables</CardTitle>
                <CardDescription className="text-[#6f5b4a]">Fresh from the farm to your plate.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-[#6f5b4a]">
                A medley of charred vegetables with herbs and olive oil, served with house-made bread.
              </CardContent>
            </Card>

            <Card className="border-[#f1ddc9] bg-[#fffaf2] shadow-sm">
              <img
                src="/images/dish-2.jpg"
                alt="Herb-Crusted Lamb Chops"
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-xl text-[#26170e]">Herb-Crusted Lamb Chops</CardTitle>
                <CardDescription className="text-[#6f5b4a]">Succulent and perfectly spiced.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-[#6f5b4a]">
                Tender chops roasted with a blend of fresh herbs and served with seasonal sides.
              </CardContent>
            </Card>

            <Card className="border-[#f1ddc9] bg-[#fffaf2] shadow-sm">
              <img
                src="/images/dish-3.jpg"
                alt="Classic Tiramisu Dessert"
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-xl text-[#26170e]">Classic Tiramisu Dessert</CardTitle>
                <CardDescription className="text-[#6f5b4a]">A timeless Italian favorite.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-[#6f5b4a]">
                Layers of coffee-soaked ladyfingers and mascarpone cream dusted with cocoa powder.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto max-w-6xl px-6 sm:px-12 py-20">
        <h2 className="text-4xl font-semibold mb-12 text-[#26170e]">What Our Guests Say</h2>
        <div className="grid gap-12 md:grid-cols-3">
          <Card className="border-[#f1ddc9] bg-[#fffaf2] shadow-sm p-6 flex flex-col justify-between">
            <blockquote className="text-[#6f5b4a] italic mb-4">"The food was incredible and the ambiance was perfect for a relaxing evening."</blockquote>
            <footer className="text-sm font-semibold text-[#26170e]">– Sarah M.</footer>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2] shadow-sm p-6 flex flex-col justify-between">
            <blockquote className="text-[#6f5b4a] italic mb-4">"Friendly staff and exquisite dishes. Highly recommend the lamb chops."</blockquote>
            <footer className="text-sm font-semibold text-[#26170e]">– Michael L.</footer>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2] shadow-sm p-6 flex flex-col justify-between">
            <blockquote className="text-[#6f5b4a] italic mb-4">"An authentic dining experience with fresh ingredients and great service."</blockquote>
            <footer className="text-sm font-semibold text-[#26170e]">– Emily R.</footer>
          </Card>
        </div>
      </section>
    </main>
  );
}