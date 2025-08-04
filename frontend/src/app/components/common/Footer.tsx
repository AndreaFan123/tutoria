export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Tutoria. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
