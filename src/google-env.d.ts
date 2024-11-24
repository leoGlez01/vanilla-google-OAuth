declare namespace google {
  namespace accounts {
    namespace id {
      function initialize(config: {
        client_id: string;
        callback: (response: { credential: string }) => void;
      }): void;

      function renderButton(
        element: HTMLElement,
        options: { theme: string; size: string; shape: string; text: string }
      ): void;

      function prompt(): void;
    }
  }
}