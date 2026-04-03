import s from './ProgressBar.module.css'

function ProgressBar() {
  return (
    <>
      <div className={s.overlay}></div>
      <div className={s.progressBar}></div>
    </>
  );
}

export default ProgressBar;