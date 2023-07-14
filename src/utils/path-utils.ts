interface PathSegment {
  title: string;
  path: string;
  isLastPath: boolean;
}

export const buildPathSegments = (path: string) => {
  const pathParts = path.split('/');
  let prevPath = '';

  return pathParts.reduce((acc: PathSegment[], path) => {
    const lastPathPart = pathParts[pathParts.length - 1];
    const isLastPath = lastPathPart === path;

    prevPath += `${path}/`;

    acc.push({ title: path, path: prevPath, isLastPath });
    return acc;
  }, []);
};
