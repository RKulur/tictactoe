import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="board" class="flex h-screen w-full items-center justify-center"> 
    <div class='h-[500px] w-[500px] border-2 border-black grid'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  </div>
`;
