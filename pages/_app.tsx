// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify, Analytics, AWSKinesisProvider } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

Analytics.addPluggable(new AWSKinesisProvider());

Analytics.configure({
  AWSKinesis: {
    // OPTIONAL -  Amazon Kinesis service region
    region: 'us-west-2',

    // OPTIONAL - The buffer size for events in number of items.
    bufferSize: 1000,

    // OPTIONAL - The number of events to be deleted from the buffer when flushed.
    flushSize: 100,

    // OPTIONAL - The interval in milliseconds to perform a buffer check and flush if necessary.
    flushInterval: 5000, // 5s

    // OPTIONAL - The limit for failed recording retries.
    resendLimit: 5
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
