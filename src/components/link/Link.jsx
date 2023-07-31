import NextLink from "next/link";

const Link = (props) => {
  const isExternalLink = props.href.startsWith("http");

  return isExternalLink ? (
    <a
      target="_blank"
      {...props}
    />
  ) : (
    <NextLink {...props} />
  );
};

export default Link;
