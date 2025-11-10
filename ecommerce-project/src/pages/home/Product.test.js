import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Product } from "./Product";

describe("Product component", () => {
  it("display the product details correctly", () => {
    const product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };

    //create the fake function so to avoid any problems to backend
    //we should not connect the backend , always create the MOCK for best practice
    //will use vi.fn() -> creates a fake function that doesn't do anything

    const loadCart = vi.fn();

    render(<Product product={product} loadCart={loadCart} />);

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();

    expect(screen.getByText("$10.90")).toBeInTheDocument();

    expect(
      screen
        .getByTestId("produc-image")
        .toHaveAttribute(
          "src",
          "images/products/athletic-cotton-socks-6-pairs.jpg"
        )
    );

    expect(
      screen
        .getByTestId("product-rating-stars")
        .toHaveAttribute("src", "images/ratings/rating-45.png")
    );
    expect(screen.getByText("87")).toBeInTheDocument();
  });
});
