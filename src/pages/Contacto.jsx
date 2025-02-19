import React from 'react'

const Contacto = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Contacto</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Nombre</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre" 
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Correo</label>
            <input 
              type="email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu correo" 
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Mensaje</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu mensaje" 
              rows="4"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacto