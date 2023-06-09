import { useState } from 'react';
import { ReactComponent as Delete } from 'assets/Delete.svg';
import styles from './ItemDelete.module.scss';
import { deleteCollection } from 'api/fetcher'

function ItemDelete(props: { bg: string, _id: string }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered((prevHovered) => !prevHovered);
  };

  const hexCode = props.bg;

  function getBtnColor(hexCode: string) {
    const percent = -17;
    const color = hexCode.replace('#', '');

    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    const adjustedR = Math.round((r * (100 + percent + 5)) / 100);
    const adjustedG = Math.round((g * (100 + percent + 2)) / 100);
    const adjustedB = Math.round((b * (100 + percent)) / 100);
    const adjustedHex = ((adjustedR << 16) + (adjustedG << 8) + adjustedB).toString(16).padStart(6, '0');

    return `#${adjustedHex}`;
  }

  async function deleteImage(){
    if (window.confirm('이미지를 삭제하시겠습니까?')) {
      try {
        const response: any = await deleteCollection(props._id);
        if (response) {
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <button className={styles.btnContainer} style={{ backgroundColor: hovered ? getBtnColor(hexCode) : hexCode }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver} onClick={deleteImage}>
      <Delete />
    </button>
  );
}
export default ItemDelete;
