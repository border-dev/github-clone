type DescriptionProps = {
  description?: string | null;
};

const Description = ({ description }: DescriptionProps) => {
  return description ? (
    <p className="py-4">{description}</p>
  ) : (
    <p className="italic">No description, website, or topics provided.</p>
  );
};

export default Description;
