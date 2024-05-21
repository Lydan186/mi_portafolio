

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-500 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Datos de contacto</h3>
          <p>Nombre: Dilan Chavarria Valdez</p>
          <p>Teléfono: 8427-9801</p>
          <p>Email: dilanchava48@gmail.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Redes sociales</h3>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://www.facebook.com/dilan.chavarria.94695" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/dilan-chavarria-05239330a/" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Dilan Chavarria Valdez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}