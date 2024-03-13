import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange: Render the App component
    render(<App />);
    // Act: Find the top-level heading
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });
    // Assert: Our element is in the document
    expect(topLevelHeading).toBeInTheDocument();
  });

test("displays an image of yourself with alt text identifying the content of the image", () => {
    // Arrange: Render the App component
    render(<App />);
    // Act
    const bioImage = screen.getByRole("img")
    // Assert: Our element is in the document
    expect(bioImage).toBeInTheDocument();
});

test("displays a second-level heading with the text About Me", () => {
    // Arrange: Render the App component
    render(<App />);
    // Act: Find the second-level heading
    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    });
    // Assert: Our element is in the document
    expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph with biography text", () => {
    // Arrange: Render the App component
    render(<App />);
    // Act
    const bioText = screen.getByRole("biography");
    // Assert: Our element is in the document
    expect(bioText).toBeInTheDocument();
});

test("displays a GitHub page link", () => {
    // Arrange: Render the App component
    render(<App />);
    // Act
    const gitHubLink = screen.getByRole("link", {name: /github/i});
    // Assert: Our element is in the document
    expect(gitHubLink).toBeInTheDocument();
});

test("displays a LinkedIn page link", () => {
    // Arrange: Render the App component
    render(<App />);
    // Act
    const linkedinLink = screen.getByRole("link", {name: /linkedin/i});
    // Assert: Our element is in the document
    expect(linkedinLink).toBeInTheDocument();
});

test("expects LinkedIn page link to have href attribute", () => {
    // Arrange: Render the App component
    render(<App />);
    // Act
    const linkedinLink = screen.getByRole("link", {name: /linkedin/i});
    // Assert: Our element is in the document
    expect(linkedinLink).toHaveAttribute("href");
});
