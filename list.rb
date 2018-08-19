require './node.rb'

class LinkedList
  def initialize
    @head = nil
  end

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

    current = @head

    return current.data if current.next == nil

    max = current.data

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

    return current.data if current.next == nil

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

    current = @head
    return current.data if n == 0

    k = self.length - 1
    return nil if !n.between?(0,k)

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

  def visit
    return if @head.nil?
    current = @head
    values = []
    while current != nil
      values << current.data
      current = current.next
    end
    print values
  end

  def delete(value)
    return if @head.nil?
    current = @head

    if self.length == 1 && current.data == value
      @head = nil
      return
    end

    if current.data == value
      @head = current.next
      return
    end

    previous = current
    current = previous.next
    next_node = current.next

    while next_node != nil
      if current.data == value
        previous.next = next_node
        return
      else
        previous = previous.next
        current = current.next
        next_node = next_node.next
      end
    end

    if current.data == value
      previous.next = nil
      return
    else
      return
    end

  end

  def reverse
    return if @head.nil?
    return if @head.next.nil?
    previous = nil
    current = @head

    while current != nil
      temp = current.next
      current.next = previous
      previous = current
      current = temp
    end
    @head = previous
    return
  end

  private

  def number?(obj)
    obj = obj.to_s unless obj.is_a? String
    /\A[+-]?\d+(\.[\d]+)?\z/.match(obj)
  end

end
