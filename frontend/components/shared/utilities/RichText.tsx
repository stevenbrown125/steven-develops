import { PortableText as PortableTextComponent } from '@portabletext/react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { urlFor } from '@/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface PortableTextProps {
  content: any;
}

if (typeof window !== 'undefined') {
  hljs.highlightAll();
}

const serializers = {
  types: {
    codeBlock: ({ value }: { value: any }) => {
      console.log(value)
      const language = value.language ? value.language : 'shell';
      const highlightedCode = hljs.highlight(value.code, { language }).value;
      return (
        <pre>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      );
    },
    image: ({ value }: { value: { asset: SanityImageSource } }) => {
      const imageUrl = urlFor(value.asset).url();
      return <img src={imageUrl} alt="" />;
    },
  },
};

const RichText: React.FC<PortableTextProps> = ({ content }) => (
  <PortableTextComponent
    value={content}
    components={serializers}
  />
);

export default RichText;
