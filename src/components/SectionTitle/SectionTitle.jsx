const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="space-y-3 max-w-xs text-center mx-auto mb-10">
      <p className="text-sm text-yellow-400 italic font-medium">
        --- {subtitle} ---
      </p>
      <h2 className="text-3xl font-semibold border-y-2 py-2 uppercase">{title}</h2>
    </div>
  );
};

export default SectionTitle;
