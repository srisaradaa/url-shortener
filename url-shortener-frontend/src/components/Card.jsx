function Card({ title, desc }) {
  return(
    <div className="px-4 pt-8 pb-6 shadow-md shadow-slate-400">
      <h3 className="font-bold mb-2 text-xl text-slate-800">
        { title }
      </h3>
      <p className="text-gray-600 text-sm">
        { desc }
      </p>
    </div>
  );
}

export default Card