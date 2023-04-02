import {
  GalleryContainer,
  GalleryCollection,
  GallerySelectButton,
} from './styles'

type ImageGalleryProps = {
  collection: {
    id: number
    image: string
    alt: string
  }[]
}

export function PetImageGallery({ collection }: ImageGalleryProps) {
  function handleSelectImage() {}

  return (
    <GalleryContainer>
      <img
        src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=50"
        alt="dog"
      />

      <GalleryCollection>
        {collection.map((item) => (
          <li key={item.id}>
            <GallerySelectButton isSelected aria-hidden>
              <img src={item.image} alt={item.alt} />
            </GallerySelectButton>
          </li>
        ))}
      </GalleryCollection>
    </GalleryContainer>
  )
}
