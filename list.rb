require './node.rb'

class LinkedList
  attr_reader :head
  # keep the head private. Not accessible outside class.
  def initialize
    @head = nil
  end

  # insert new node at beginning of list
  def insert(value)
    new_node = Node.new(value)
    if @head
      new_node.next = @head
      @head = new_node
    else
      @head = new_node
    end
  end

  def search(value)
    return false if @head.nil?

    current = @head

    until current == nil
      if current.data == value
        return true
      else
        current = current.next
      end
    end

    return false
  end

  def find_max
    return nil if @head.nil?

    max = 0
    current = @head
    until current == nil
      if current.data > max
        max = current.data
      else
        current = current.next
      end
    end

    return max
  end

  def find_min
    return nil if @head.nil?

    current = @head
    min = current.data

    until current == nil
      if current.data < min
        min = current.data
      else
        current = current.next
      end
    end

    return min
  end

  def length
    return 0 if @head.nil?

    count = 0
    current = @head
    while current != nil
      count += 1
      current = current.next
    end
    return count
  end

  def find_nth_from_beginning(n)
    return nil if !number?(n)

    k = self.length - 1
    return nil if !n.between?(0,k)
    current = @head
    return current.data if n == 0

    i = 1
    current = current.next

    until i == n
      i += 1
      current = current.next
    end

    return current.data
  end

  def insert_ascending(value)

    self.insert(value) if @head.nil?

    new_node = Node.new(value)
    i = @head

    if self.length == 1 && value <= i.data
      new_node.next = i
      @head = new_node
      return
    elsif self.length == 1 && value > i.data
      @head.next = new_node
      return
    elsif value <= i.data
      self.insert(value)
    end

    k = i.next

    while k != nil
      if i.data == value
        i.next = new_node
        new_node.next = k
        return
      elsif value > i.data && value < k.data
        i.next = new_node
        new_node.next = k
        return
      else
        i = i.next
        k = k.next
      end
    end

    i.next = new_node
    return

  end

  private

  def number?(obj)
    obj = obj.to_s unless obj.is_a? String
    /\A[+-]?\d+(\.[\d]+)?\z/.match(obj)
  end

end
