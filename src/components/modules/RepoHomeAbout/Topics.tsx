import Link from '@components/atoms/Link';

type TopicsProps = {
  topics?: string[] | null;
};

const Topics = ({ topics }: TopicsProps) => {
  if (!topics) {
    return null;
  }

  return (
    <>
      <h3 className="sr-only">Topics</h3>
      <div className="my-4">
        <div className="text-xs">
          {topics.map((topic) => (
            <Link
              key={topic}
              className="m-[0_0.125em_0.333em_0] inline-block whitespace-nowrap rounded-[2rem] border border-transparent bg-[#388bfd1a] px-[10px] text-xs font-medium leading-[22px] text-[#2f81f7] hover:bg-[#1f6feb] hover:text-white"
              href="#"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Topics;
